import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import { AuthForm } from "./containers/AuthForm/AuthForm";

export function App() {

  console.log(window.location)

  if (window.location.pathname === "/auth") {
    return (
      <DashboardLayout>
        <AuthForm />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      Главная
    </DashboardLayout>
  );

}
