import { useState } from 'react'
import { getPasswordStrength } from '../utils/passwordStrength'

const strengthLevels = {
  vacía: 0,
  débil: 25,
  media: 50,
  fuerte: 75,
  'muy fuerte': 100,
}

export default function PasswordStrengthMeter() {
  const [password, setPassword] = useState('')

  const strength = getPasswordStrength(password)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div>
        <label htmlFor="password">Password </label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <p>{strength}</p>

      <div
        data-testid="strength-bar-container"
        style={{
          width: '300px',
          height: '12px',
          backgroundColor: '#ddd',
          borderRadius: '6px',
          overflow: 'hidden',
        }}
      >
        <div
          data-testid="strength-bar"
          style={{
            height: '100%',
            width: `${strengthLevels[strength]}%`,
            backgroundColor: 'green',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  )
}