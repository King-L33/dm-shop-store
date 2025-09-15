"use client";
import { PiReceiptFill } from "react-icons/pi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { MdOutlineRocket } from "react-icons/md";
import { useAuth } from "@/lib/useAuth";
import axios from "axios";
import useSWR, { Fetcher } from "swr";
import { TypeOrderModel } from "@/types/models";
import Loading from "@/components/custom/Loading";

export default function MainContent() {
  const { user, profile } = useAuth();
  // fecthing client (cookie-auth)
  const fetcher: Fetcher<TypeOrderModel[], string> = async (url: string) => {
    return await axios
      .get(url, {
        params: { user_id: user?.id },
        withCredentials: true,
      })
      .then((res) => res.data.data)
      .catch((err) => console.log(err))
      .finally(() => {});
  };

  const { data, isLoading } = useSWR<TypeOrderModel[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/user/orders",
    fetcher
  );

  return (
    <div className="col-span-3 space-y-4">
      {isLoading && <Loading loading={true} />}
      <div className="flex flex-col gap-4">
        <div className="flex gap-8">
          <p className="text-body-xl-600">
            Hello, {(profile?.full_name as string | undefined) ?? (user?.email ?? "")}
          </p>
        </div>
        <p className="text-body-sm-500 max-w-lg text-gray-700">
          From your account dashboard. you can easily check & view your Recent
          Orders, manage your Shipping and Billing Addresses and edit your
          Password and Account Details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="rounded-none col-span-2">
          <CardHeader className="border border-gray-100 py-2 text-label3">
            ADDRESS INFO
          </CardHeader>
          <CardContent className="flex flex-col gap-4 py-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-body-md-400">
                  {(profile?.full_name as string | undefined) ?? (user?.email ?? "")}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-body-sm-400">
              <div className="inline-flex gap-2">
                <strong>Email: </strong>
                <span className="text-gray-600">{user?.email ?? ""}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col justify-between gap-1">
          <div className="flex items-center gap-4 bg-secondary-50 p-4">
            <span className="h-12 w-12 bg-white grid place-content-center">
              <MdOutlineRocket size={30} className="text-secondary-500" />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-body-xl-600">{data?.length}</span>
              <span className="text-body-sm-400 text-gray-700">
                Total orders
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-primary-50 p-4">
            <span className="h-12 w-12 bg-white grid place-content-center">
              <PiReceiptFill size={30} className="text-primary-500" />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-body-xl-600">
                {data &&
                  data.filter((item) => item.status === "pending").length}
              </span>
              <span className="text-body-sm-400 text-gray-700">
                Pending orders
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-success-50 p-4">
            <span className="h-12 w-12 bg-white grid place-content-center">
              <MdOutlineRocket size={30} className="text-success-500" />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-body-xl-600">
                {data?.filter((item) => item.status === "completed").length}
              </span>
              <span className="text-body-sm-400 text-gray-700">
                Completed orders
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
