import {
  Refine,
  GitHubBanner,
  WelcomePage,
  Authenticated,
} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import routerProvider, {
  NavigateToResource,
  CatchAllNavigate,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router";
import { Layout } from "./components/refine-ui/layout/layout";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import "./App.css";
import Dashboard from "@/pages/Dashboard.tsx";
import {BookOpen, Home} from "lucide-react";
import SubjectList from "@/pages/subjects/list.tsx";
import SubjectCreate from "@/pages/subjects/Create.tsx";
import {dataProvider} from "@/providers/data.ts";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "yYxUtY-ivYJeS-U9LXO1",
              }}
              resources={[
                {
                  name: "Dashboard",
                  list: '/',
                  meta: {
                    label: 'home',
                    icon: <Home/>
                  }
                },
                {
                  name:'Subjects',
                  list: '/subjects',
                  create:'/subjects/create',
                  meta: { label: 'subjects', icon: <BookOpen/> }
                }
              ]}
            >
              <Routes>
                <Route element={
                          <Layout>
                           <Outlet />
                          </Layout>
                       }>

                <Route path="/" element={<Dashboard/>} />
                  <Route path="subjects">
                    <Route index element={<SubjectList/>} />
                    <Route path='create' element={<SubjectCreate/>} />
                  </Route>
                </Route>
              </Routes>
              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
