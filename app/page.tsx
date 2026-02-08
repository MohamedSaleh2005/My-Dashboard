import Dashboard from "@/Components/Dashboard/Dashboard";
import { DataProvider } from "@/app/DataContext";


export default function Home() {
  return (
    <div>
      <DataProvider>


        <Dashboard />

        
      </DataProvider>

    </div>
  );
}
