export default function StatsSection() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      {[
        { label: "Present", value: 10 },
        { label: "Absent", value: 12 },
        { label: "Late", value: 12 },
        { label: "Punctuality", value: "86%" },
      ].map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">{stat.label}</h3>
          <p className="text-xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
