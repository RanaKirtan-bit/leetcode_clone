import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Shield, Sparkles, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default async function About() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Modern Coding Experience",
      description:
        "Clean UI, fast navigation, and an experience designed to keep you focused on solving problems.",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Problem Practice at Scale",
      description:
        "Browse problems, submit solutions, and improve with real feedback loops.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Progress Tracking",
      description:
        "See your growth over time and stay motivated with measurable outcomes.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description:
        "Learn from others, share knowledge, and keep building with a developer-first mindset.",
    },
  ];

  const values = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Respect for Your Time",
      description:
        "Fast flows, minimal friction, and a layout that stays consistent across pages.",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Open & Extensible",
      description:
        "Designed to be easy to evolve—new features and problem sets can be added cleanly.",
    },
  ];

  return (
    <div className="min-h-screen transition-colors mt-24">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              About LeetCode Clone
            </Badge>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
              Built to help you{" "}
              <span className="text-amber-600 dark:text-amber-400">code</span>{" "}
              better,{" "}
              <span className="text-indigo-600 dark:text-indigo-400">faster</span>.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              This platform provides a focused environment for practicing coding
              challenges—complete with theming, dashboards, and submission
              workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
              <Link href="/problems">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 dark:bg-amber-400 dark:hover:bg-amber-500 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Explore Problems
                </Button>
              </Link>
              <Link href="/profile">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-indigo-300 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                >
                  View Profile
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {values.map((v, idx) => (
              <Card
                key={idx}
                className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      {v.icon}
                    </div>
                    <div>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {v.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {v.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Designed to match the site’s existing UI patterns and dark
                    mode styling.
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What you can expect
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                A clean, theme-matched experience that helps you stay engaged and
                make steady progress.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-200 border-gray-200 dark:border-gray-700"
                >
                  <CardHeader>
                    <div
                      className={
                        index % 2 === 0
                          ? "w-12 h-12 bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-4"
                          : "w-12 h-12 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-4"
                      }
                    >
                      {feature.icon}
                    </div>
                    <CardTitle className="text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <section className="mt-16 py-12 bg-gradient-to-r from-amber-600 to-amber-300 dark:from-amber-600 dark:to-indigo-600 rounded-md">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to improve?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Start solving problems today and track your progress as you
                grow.
              </p>
              <Link href="/problems">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
                >
                  Start Coding
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
