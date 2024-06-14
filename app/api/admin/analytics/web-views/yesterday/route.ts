// pages/api/analytics.js
import { NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const serviceAccountKey = JSON.parse(
  Buffer.from(
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 as string,
    "base64"
  ).toString()
);

export async function GET(req: Request) {
  const vnDate = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh",
    })
  );

  vnDate.setDate(vnDate.getDate() - 1);

  const year = vnDate.getFullYear();
  const month = String(vnDate.getMonth() + 1).padStart(2, "0");
  const day = String(vnDate.getDate()).padStart(2, "0");

  const yesterdayDate = `${year}-${month}-${day}`;

  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: serviceAccountKey,
  });

  // Replace 'your-GA4-property-id' with your GA4 Property ID
  const propertyId = "446028783";

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: yesterdayDate,
          endDate: yesterdayDate,
        },
      ],
      metrics: [{ name: "screenPageViews" }], // Use "screen_views" for mobile app data
    });

    // Assuming each row corresponds to different dimensions and you want the total
    const totalViewsYesterday = response.rows.reduce((acc: any, row: any) => {
      const pageViews = row.metricValues[0].value;
      return acc + parseInt(pageViews, 10);
    }, 0);

    // Send the analytics data in the response
    return NextResponse.json(
      {
        data: totalViewsYesterday,
        status: 200,
        msg: "Get web views yesterday successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching Google Analytics data" });
  }
}
