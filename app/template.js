import TabsWrapper from "@/components/ui/Tabs";

export default function Template({ children }) {
  return (
    <main>
      <TabsWrapper>{children}</TabsWrapper>
    </main>
  );
}
