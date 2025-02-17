// src/components/settings/VerticalSidebar.tsx
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/utils/mode-toggle";
import { useAuthStore } from "@/stores/authStore";

const sidebarVariants = {
	hidden: { x: -250, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
};

export default function VerticalSidebar() {
	const router = useRouter();
	const { logoutUser } = useAuthStore();

	const handleLogout = async () => {
		await logoutUser();
		router.push("/en/login");
	};

	return (
		<motion.aside
			initial="hidden"
			animate="visible"
			variants={sidebarVariants}
			className="fixed top-0 left-0 z-10 flex flex-col w-64 h-full p-6 bg-gray-200 shadow-lg dark:bg-black"
		>
			<div className="mb-8">
				<h2 className="text-2xl font-bold text-gray-800 dark:text-white">
					Settings
				</h2>
			</div>
			<nav className="flex flex-col gap-4">
				<Link
					href="/en/settings/profile"
					className="text-lg text-gray-700 dark:text-white hover:text-black dark:hover:text-white"
				>
					Profile
				</Link>
				<Link
					href="/en/settings/account"
					className="text-lg text-gray-700 dark:text-white hover:text-black dark:hover:text-white"
				>
					Account
				</Link>
				<Link
					href="/en/settings/preferences"
					className="text-lg text-gray-700 dark:text-white hover:text-black dark:hover:text-white"
				>
					Preferences
				</Link>
				<Link
					href="/en/settings/notifications"
					className="text-lg text-gray-700 dark:text-white hover:text-black dark:hover:text-white"
				>
					Notifications
				</Link>
				{/* Dummy links – update these as needed */}
			</nav>
			<div className="pt-8 mt-auto">
				<ModeToggle />
				<Button
					variant="destructive"
					onClick={handleLogout}
					className="w-full mt-4"
				>
					Logout
				</Button>
			</div>
		</motion.aside>
	);
}
