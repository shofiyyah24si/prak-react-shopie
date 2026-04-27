import ErrorPage from "../../components/ErrorPage";

export default function Error401() {
  return (
    <ErrorPage
      code="401"
      description="Unauthorized - Kamu tidak memiliki akses."
      image="https://illustrations.popsy.co/blue/question-mark.svg"
    />
  );
}
