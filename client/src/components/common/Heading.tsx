import { Sparkles } from "lucide-react";

interface IHeading {
  heading: string;
  glow?: boolean;
  icon?: React.ReactNode;
}

export default function Heading({ heading, glow = true, icon }: IHeading) {
  return (
    <div className="relative group">
      {/* Glow effect */}
      {glow && (
        <div className="absolute -left-1 -top-1 w-16 h-16 rounded-full bg-indigo-500/20 dark:bg-indigo-400/20 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      <div className="flex items-center gap-3 relative z-10">
        {/* Icon slot with default sparkle */}
        {icon || (
          <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors" />
        )}

        {/* Main heading with animated border */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200 bg-clip-text text-transparent relative">
          {heading}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-500 ease-out" />
        </h2>
      </div>

      {/* Subtle floating particles */}
      {glow && (
        <div className="absolute -right-4 -top-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-indigo-400/70 dark:bg-indigo-300/70"
              style={{
                animation: `float 3s ease-in-out ${i * 0.5}s infinite`
              }}
            />
          ))}
        </div>
      )}

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-8px) scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
