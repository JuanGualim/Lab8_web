import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PasswordStrengthMeter from './PasswordStrengthMeter'

describe('PasswordStrengthMeter', () => {
  it('renders password input', () => {
        render(<PasswordStrengthMeter />)

        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

    it('shows "vacía" initially', () => {
        render(<PasswordStrengthMeter />)

        expect(screen.getByText('vacía')).toBeInTheDocument()
    })

    it('shows "débil" for short password', async () => {
        const user = userEvent.setup()

        render(<PasswordStrengthMeter />)

        const input = screen.getByLabelText(/password/i)

        await user.type(input, 'abc')

        expect(screen.getByText('débil')).toBeInTheDocument()
    })

    it('shows "media" for medium password', async () => {
        const user = userEvent.setup()

        render(<PasswordStrengthMeter />)

        const input = screen.getByLabelText(/password/i)

        await user.type(input, 'abcdefgh')

        expect(screen.getByText('media')).toBeInTheDocument()
    })

    it('shows "fuerte" for password with numbers', async () => {
        const user = userEvent.setup()

        render(<PasswordStrengthMeter />)

        const input = screen.getByLabelText(/password/i)

        await user.type(input, 'abcd1234')

        expect(screen.getByText('fuerte')).toBeInTheDocument()
    })

    it('shows "muy fuerte" for password with number and symbol', async () => {
        const user = userEvent.setup()

        render(<PasswordStrengthMeter />)

        const input = screen.getByLabelText(/password/i)

        await user.type(input, 'abcd1234!')

        expect(screen.getByText('muy fuerte')).toBeInTheDocument()
    })

  it('returns to "vacía" when input is cleared', async () => {
        const user = userEvent.setup()

        render(<PasswordStrengthMeter />)

        const input = screen.getByLabelText(/password/i)

        await user.type(input, 'abcd1234!')
        await user.clear(input)

        expect(screen.getByText('vacía')).toBeInTheDocument()
  })

    it('shows empty progress bar initially', () => {
        render(<PasswordStrengthMeter />)

        const bar = screen.getByTestId('strength-bar')

        expect(bar).toHaveStyle({ width: '0%' })
    })

    it('updates progress bar for weak password', async () => {
        const user = userEvent.setup()

        render(<PasswordStrengthMeter />)

        const input = screen.getByLabelText(/password/i)

        await user.type(input, 'abc')

        const bar = screen.getByTestId('strength-bar')

        expect(bar).toHaveStyle({ width: '25%' })
    })

    it('updates progress bar for very strong password', async () => {
        const user = userEvent.setup()

        render(<PasswordStrengthMeter />)

        const input = screen.getByLabelText(/password/i)

        await user.type(input, 'abcd1234!')

        const bar = screen.getByTestId('strength-bar')

        expect(bar).toHaveStyle({ width: '100%' })
    })
})
