import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - COMET Scanner Template Wizard",
  description:
    "Administrative interface for managing templates, sections, and system settings",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout" data-oid="6ge_9bd">
      {children}
    </div>
  );
}
