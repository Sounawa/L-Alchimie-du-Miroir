interface BookTableProps {
  headers: string[];
  rows: React.ReactNode[][];
}

export default function BookTable({ headers, rows }: BookTableProps) {
  return (
    <div className="my-7 overflow-hidden rounded-xl" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)' }}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr
              style={{
                background: 'linear-gradient(135deg, #1B2A4A, #243557)',
                color: '#FFF8E7',
              }}
            >
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="px-5 py-4 text-left text-xs uppercase tracking-wider font-semibold"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="transition-colors duration-200"
                style={{
                  borderBottom: '1px solid rgba(184, 134, 11, 0.1)',
                  background: rowIdx % 2 === 0 ? 'transparent' : 'rgba(184, 134, 11, 0.03)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(184, 134, 11, 0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    rowIdx % 2 === 0 ? 'transparent' : 'rgba(184, 134, 11, 0.03)';
                }}
              >
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-5 py-4 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
