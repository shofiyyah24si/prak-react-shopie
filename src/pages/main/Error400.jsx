import ErrorPage from "../../components/ErrorPage";

export default function Error400() {
  return (
    <ErrorPage
      code="400"
      description="Bad Request - Permintaan tidak valid."
      image="https://illustrations.popsy.co/amber/crashed-error.svg"
    />
  );
}
