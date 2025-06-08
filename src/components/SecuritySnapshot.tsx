// components/SecuritySnapshot.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function SecuritySnapshot() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-20" id="security">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Security & Transparency Snapshot
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          We built Formula Stat AI on solid trust principles. From noncustodial access to full data privacy,
          our security features are here to protect your money, your data, and your peace of mind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="shadow-lg border border-gray-200 rounded-2xl hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Noncustodial Trading</h3>
              <p className="text-gray-600 text-sm">
                You stay in control. Your funds never leave your exchange. Our AI connects via API, not custody.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="shadow-lg border border-gray-200 rounded-2xl hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Data Encryption</h3>
              <p className="text-gray-600 text-sm">
                All client data is encrypted in transit and at rest. Your privacy is protected by design.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="shadow-lg border border-gray-200 rounded-2xl hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">AuditReady Logs</h3>
              <p className="text-gray-600 text-sm">
                Every action is traceable. Access clean logs that ensure accountability and transparency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
