"use client";
import Container from "@/components/custom/Container";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/custom/Input";
import { trackOrderValidationSchema } from "../../../types/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import useSWRMutation from "swr/mutation";
import { StoreTrackOrderData } from "@/types/forms";
import { z } from "zod";
import { AlertCircle } from "lucide-react";
import { RectangleButton } from "@/components/custom/RectangleButton";
import { useAuth } from "@/lib/useAuth";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function OrderTrack() {
  const router = useRouter();
  const { user } = useAuth();
  const isSignedIn = !!user;

  async function getRequest(
    url: string,
    { arg }: { arg: StoreTrackOrderData }
  ) {
    return await axios
      .get(process.env.NEXT_PUBLIC_API_URL + url, {
        params: arg,
        withCredentials: true,
      })
      .then(async (res) => {
        const data = res.data;
        if (res.data.success === false) {
          toast({
            variant: "destructive",
            title: "OOps,",
            description: data.message,
          });
        } else {
          toast({
            variant: "default",
            title: "Well done",
            description: "redirecting",
          });
          router.push(
            `/customer/orders/${data.data.orderitem._id}/track/${data.data._id}`
          );
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {});
  }


  const form = useForm<z.infer<typeof trackOrderValidationSchema>>({
    resolver: zodResolver(trackOrderValidationSchema),
  });

  const { trigger: create, isMutating: isCreating } = useSWRMutation(
    "/api/user/trackorders",
    getRequest /* options */
  );

  const onSubmit = async (
    values: z.infer<typeof trackOrderValidationSchema>
  ) => {
    if (!isSignedIn) {
      router.push("/sign-in");
      return;
    }

    const data = {
      _id: values._id,
      user_id: user?.id,
    };
    await create(data);
  };

  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-col gap-4">
          <h1>Track Order</h1>
          <p>
            To track your order please enter your order ID in the input field
            below and press the “Track Order” button. this was given to you on
            your receipt and in the confirmation email you should have received.
          </p>
        </div>

        <div className="py-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Order id</FormLabel>
                      <FormControl>
                        <Input
                          className="lowercase"
                          placeholder="Order id here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <FormDescription className="flex gap-4 items-center">
                        <AlertCircle size={16} />
                        <span className="text-body-sm-400">
                          Find Order ID from Dashboard or From Email.
                        </span>
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>
              <RectangleButton icon="after" type="submit" disabled={isCreating}>
                TRACK ORDER
              </RectangleButton>
            </form>
          </Form>
        </div>
      </Container>
    </section>
  );
}
