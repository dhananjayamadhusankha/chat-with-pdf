import Document from "@/components/Document";

export const dynamic = "force-dynamic";

function DashboardPage() {
  return (
    <div
      className="h-full max-w-7xl mx-auto"
    >
      <h1 className="text-3xl p-5 bg-gray-100 dark:bg-indigo-100 font-extralight text-indigo-600">
        My Document
      </h1>

      <Document />
    </div>
  );
}

export default DashboardPage;
