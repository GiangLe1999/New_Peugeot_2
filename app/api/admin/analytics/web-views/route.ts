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
  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: serviceAccountKey,
  });

  // Replace 'your-GA4-property-id' with your GA4 Property ID
  const propertyId = "446028783";

  try {
    // Make a call to the GA4 Data API
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "2020-01-01",
          endDate: "today",
        },
      ],
      metrics: [{ name: "screenPageViews" }],
    });

    // Send the analytics data in the response
    return NextResponse.json(
      {
        data: response?.rows?.[0]?.metricValues?.[0]?.value,
        status: 200,
        msg: "Get analytics data successfully",
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
