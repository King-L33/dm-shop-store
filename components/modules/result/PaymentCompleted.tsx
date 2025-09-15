"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/custom/Loading";
import Container from "@/components/custom/Container";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { RectangleButton } from "@/components/custom/RectangleButton";

export default function PaymentCompleted() {
  const router = useSearchParams();
  const routerPath = useRouter();
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Verify Paystack payment by reference
  useEffect(() => {
    const verify = async () => {
      const reference = router.get("reference");
      if (!reference) return;
      setLoading(true);
      await axios
        .get(
          process.env.NEXT_PUBLIC_API_URL +
            "/api/user/payments?reference=" +
            reference,
          { withCredentials: true }
        )
        .then((res) => {
          if (res?.data?.ok) {
            setOk(true);
          } else {
            setOk(false);
            setErrorMsg(res?.data?.error || res?.data?.message || "Verification failed");
          }
        })
        .catch((error: any) => {
          setOk(false);
          setErrorMsg(error?.response?.data?.error || String(error));
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if (router.get("reference")) verify();
  }, [router]);

  return (
    <section className="py-20">
      {loading && <Loading loading={true} />}
      <Container>
        <div className="flex flex-col gap-8 items-center">
          <Button
            className="h-[66px] w-[66px] rounded-full border-2 border-success-500  bg-success-100"
            size="sm"
          >
            <Check className="text-success-500" />
          </Button>
          <h3>{ok === false ? "Payment verification failed" : "Your order is successfully paid"}</h3>
          <p className="text-body-sm-400">
            {ok === false
              ? "We couldn't verify your payment. If funds were deducted, the status should update shortly. You can retry verification from your orders page."
              : "Your order has been paid successfully. Go to your dashboard to track orders."}
          </p>

          <div className="flex gap-4">
            <RectangleButton
              icon="none"
              variant="primary-outline"
              onClick={() => routerPath.push("/customer/dashboard")}
            >
              Go to dashboard
            </RectangleButton>
            <RectangleButton
              onClick={() => routerPath.push("/customer/orders")}
              variant="primary"
              icon="after"
            >
              View orders
            </RectangleButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
