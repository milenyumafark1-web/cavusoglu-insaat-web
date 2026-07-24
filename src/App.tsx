import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "next-themes";
import { Route, Switch } from "wouter";
import CookieConsent from "./components/CookieConsent";
import ErrorBoundary from "./components/ErrorBoundary";
import AnnouncementBar from "./components/AnnouncementBar";
import KeyboardShortcuts from "./components/KeyboardShortcuts";
import SectionDots from "./components/SectionDots";
import AccessibilityPanel from "./components/AccessibilityPanel";
import MobileStickyBar from "./components/MobileStickyBar";
import Preloader from "./components/Preloader";
import ReadingProgress from "./components/ReadingProgress";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Legal = lazy(() => import("./pages/Legal"));
const Accessibility = lazy(() => import("./pages/Accessibility"));

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/gizlilik"} component={Legal} />
      <Route path={"/kvkk"} component={Legal} />
      <Route path="/erisilebilirlik" component={Accessibility} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <TooltipProvider>
          <Toaster />
          <Preloader />
          <ReadingProgress />
          <AnnouncementBar />
          <Suspense fallback={
            <div className="flex min-h-screen items-center justify-center bg-stone-50">
              <div className="flex flex-col items-center gap-4">
                <div className="skeleton-shimmer h-8 w-48" />
                <div className="skeleton-shimmer h-4 w-64" />
                <div className="skeleton-shimmer h-4 w-56" />
              </div>
            </div>
          }>
            <Router />
          </Suspense>
          <ScrollToTop />
          <MobileStickyBar />
          <KeyboardShortcuts />
          <SectionDots />
          <AccessibilityPanel />
          <CookieConsent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
