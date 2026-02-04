// app/resume/page.tsx
export const metadata = {
  title: "Arjuna Velayudam Resume",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <iframe
        title="Arjuna Velayudam Resume"
        src="/files/Arjuna%20Velayudam%20Resume.pdf"
        className="h-screen w-full"
      />
    </div>
  );
}
