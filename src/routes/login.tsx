import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 flex justify-center items-center">
      <div className="backdrop-blur-xl bg-white/5 rounded-3xl shadow-2xl border border-white/10 p-8 min-w-96">
        {/* header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Login</h1>
        </div>

        {/* form */}
        <div className="space-y-6 mt-6">
          <div>
            <Label
              htmlFor="username"
              className="text-sm font-medium text-gray-300 mb-2"
            >
              Username
            </Label>
            <Input
              id="username"
              className="w-full px-3  rounded-lg h-10 bg-white/10 border border-white/20 text-white placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your Username..."
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              className="w-full px-3  rounded-lg h-10 bg-white/10 border border-white/20 text-white placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your Username..."
            />
          </div>
          <div className="mt-6 text-center">
            <Button className="w-full py-3 px-4 bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-900/50 cursor-pointer">
              Login
            </Button>
          </div>
        </div>
        <div className="mt-3 flex justify-end text-white gap-2">
          Not registered?
          <Link to="/register" className="underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
