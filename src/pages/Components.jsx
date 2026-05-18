import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Footer from "../components/Footer";

export default function Components() {
  return (
    <>
      <Container className="bg-gray-200">
        <PageHeader title="Components" />

        <p>Ini halaman Components</p>
        <div className="mb-3 flex gap-2">
          <Button>Simpan</Button>
          <Button type="danger">Hapus</Button>
          <Button type="secondary">Edit</Button>
          <Button type="warning">Cetak</Button>
        </div>

        <div className="mb-3 flex gap-2">
          <Badge>Berhasil!</Badge>
          <Badge type="success">Berhasil!</Badge>
          <Badge type="danger">Error</Badge>
          <Badge type="warning">Kurang</Badge>
        </div>

        <div className="mb-3 flex gap-2">
          <Avatar name="Shopi" />
          <Avatar name="Lulu" />
          <Avatar name="Zahra" />
        </div>
      </Container>
      <Footer />
    </>
  );
}
