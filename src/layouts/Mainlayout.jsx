import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-max px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
  );
}