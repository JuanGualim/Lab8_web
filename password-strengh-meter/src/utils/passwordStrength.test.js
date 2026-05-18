import { describe, it, expect } from 'vitest'
import { getPasswordStrength } from './passwordStrength'

describe('getPasswordStrength', () => {
  it('returns "vacía" for empty password', () => {
    expect(getPasswordStrength('')).toBe('vacía')
  })

  it('returns "débil" for password shorter than 8 chars', () => {
    expect(getPasswordStrength('abc')).toBe('débil')
  })

  it('returns "media" for 8+ chars without numbers or symbols', () => {
    expect(getPasswordStrength('abcdefgh')).toBe('media')
  })

  it('returns "fuerte" for 8+ chars with number', () => {
    expect(getPasswordStrength('abcd1234')).toBe('fuerte')
  })

  it('returns "muy fuerte" for 8+ chars with number and symbol', () => {
    expect(getPasswordStrength('abcd1234!')).toBe('muy fuerte')
  })

  it('8 chars without numbers is not weak', () => {
    expect(getPasswordStrength('abcdefgh')).not.toBe('débil')
  })

  it('7 chars is not medium', () => {
    expect(getPasswordStrength('abcdefg')).not.toBe('media')
  })

  it('symbols only and less than 8 chars is weak', () => {
    expect(getPasswordStrength('!!!!')).toBe('débil')
  })
})