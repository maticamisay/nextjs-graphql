import TipForm from "@/components/tips/TipForm";
import TipsOfDayList from "@/components/tips/TipsOfDayList";
import { GET_ALL_TIPS_OF_DAY } from "@/graphql/queries/tipofday";
import { getClient } from "@/lib/client";
import React from "react";

const TipofDay = async () => {
  const { data } = await getClient().query({
    query: GET_ALL_TIPS_OF_DAY,
  });

  return (
    <>
      <TipForm />
      <TipsOfDayList tips={data.allTipsOfDay} />
    </>
  );
};

export default TipofDay;
