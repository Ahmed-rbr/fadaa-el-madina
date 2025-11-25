import NavBar from "../components/NavBar";

const AppTemplate = ({ children }) => {
  return (
    <main className="font-poppins flex  flex-col gap-3">
      <NavBar />
      <div className="mt-26 bg-purple ">{children}</div>
    </main>
  );
};

export default AppTemplate;
