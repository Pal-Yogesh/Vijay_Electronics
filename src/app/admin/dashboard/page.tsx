import AddProductForm from "@/components/admin/AddProductFrom";
import ViewProducts from "@/components/admin/ViewProducts";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const { userId, sessionClaims } = await auth();

  // Additional server-side protection
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <UserButton />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to Admin Panel</h2>
          <p className="text-gray-600 mb-4">
            You have successfully accessed the admin dashboard. Only users with
            <span className="font-semibold text-blue-600"> admin role</span> can
            access this page.
          </p>
          <AddProductForm />

          {/* <div className="my-20">
            <ViewProducts />
          </div> */}
        </div>
      </div>
    </div>
  );
}
