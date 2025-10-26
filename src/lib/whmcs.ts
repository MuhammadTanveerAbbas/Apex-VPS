// WHMCS Configuration

// IMPORTANT: Please update these values with your actual WHMCS information.
// You can find these details in your WHMCS admin panel.

export const whmcsConfig = {
  // Your WHMCS installation URL.
  // Example: "https://your-domain.com/whmcs"
  url: process.env.NEXT_PUBLIC_WHMCS_URL || "https://your-whmcs-domain.com/whmcs",

  // Your WHMCS API credentials. You can generate these in
  // Setup > Staff Management > Manage API Credentials.
  // It is recommended to use environment variables for security.
  apiIdentifier: process.env.WHMCS_API_IDENTIFIER || "YOUR_API_IDENTIFIER",
  apiSecret: process.env.WHMCS_API_SECRET || "YOUR_API_SECRET",
};
