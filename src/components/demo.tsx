import { BackgroundPaths } from "./ui/background-paths";
import { GlowCard } from "@/components/ui/spotlight-card";

export function DemoBackgroundPaths({ className }: { className?: string }) {
    return <BackgroundPaths title="" className={className} />
}

export function DemoGlowCard() {
    return (
        <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 custom-cursor">
            <GlowCard><div>Test1</div></GlowCard>
            <GlowCard><div>Test2</div></GlowCard>
            <GlowCard><div>Test3</div></GlowCard>
        </div>
    );
}
