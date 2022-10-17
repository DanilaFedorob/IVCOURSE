import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import {AuthForm} from "./containers/AuthForm/AuthForm";

export function App() {
  return (
    <DashboardLayout>
       <AuthForm> </AuthForm>{" "}
    </DashboardLayout>
  );
}
