import ErrorPage from "../components/ErrorPage";

export default function Error403() {
  return (
    <ErrorPage
      code="403"
      description="Forbidden - Akses ditolak."
      image="https://illustrations.popsy.co/red/falling.svg"
    />
  );
}
