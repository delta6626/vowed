import DashboardStatBox from "../generic/DashboardStatBox";

export const DashboardStats = async () => {
  return (
    <div className="flex gap-4 mt-8">
      <DashboardStatBox statBoxType={"active"} mainText={0} />
      <DashboardStatBox statBoxType={"fulfillment"} mainText={`${0}%`} />
      <DashboardStatBox statBoxType={"total"} mainText={0} />
    </div>
  );
};
