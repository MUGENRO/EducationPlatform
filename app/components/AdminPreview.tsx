type AdminPreviewProps = {
  name: string;
  course: string;
  phone: string;
};

export default function AdminPreview({
  name,
  course,
  phone,
}: AdminPreviewProps) {
  return (
    <div className="rounded-2xl border border-green-700 bg-[#10291c] p-5 text-white">
      <h2 className="mb-4 text-lg font-bold">
        📥 Новая заявка
      </h2>

      <div className="space-y-2 text-sm">
        <p>
          <strong>Имя:</strong> {name}
        </p>

        <p>
          <strong>Курс:</strong> {course}
        </p>

        <p>
          <strong>Телефон:</strong> {phone}
        </p>
      </div>
    </div>
  );
}