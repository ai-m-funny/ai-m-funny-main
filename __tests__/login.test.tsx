import singletonRouter, { useRouter } from 'next/router';
import NextLink from 'next/link';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/login';
import '@testing-library/jest-dom';
import { SessionProvider } from 'next-auth/react';

import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('Login Page', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/login');
    render(<Login />);
  });

  describe('Buttons', () => {
    it('button with text: Google Sign In', () => {
      const button = screen.getByRole('button', {
        name: 'Sign In with Google Google Icon',
      });
      expect(button).toBeInTheDocument();
    });
  });

  describe('Text', () => {
    it('heading with text: Welcome', () => {
      const heading = screen.getByRole('heading', {
        name: 'Welcome',
      });
      expect(heading).toBeInTheDocument();
    });
  });

  describe('Links', () => {
    it('link with text: for Sign Up', () => {
      const link = screen.getByRole('link', {
        name: 'Sign Up',
      });
      expect(link).toBeInTheDocument();
    });

    // it('Sign Up link routes correctly', () => {
    //   fireEvent.click(
    //     screen.getByRole('link', {
    //       name: 'Sign Up',
    //     })
    //   );
    //   expect(singletonRouter).toMatchObject({ asPath: '/login' });
    // });
  });
});
