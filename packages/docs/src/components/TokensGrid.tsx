import React from 'react'
import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  hasRepresentation?: boolean
}

export function TokensGrid({
  tokens,
  hasRemValue = false,
  hasRepresentation,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <th>Name</th>
        <th>Value</th>
        {hasRemValue && <th>Pixels</th>}
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>

            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
            {hasRepresentation && (
              <td>
                <span style={{ width: value }}></span>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
