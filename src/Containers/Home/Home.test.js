import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  
import Home from './Home';

// Mocking child components to isolate testing of Home
jest.mock('../About/About', () => () => <div>About Component</div>);
jest.mock('../Projects/Projects', () => () => <div>Projects Component</div>);
jest.mock('../Contacts/Contact', () => () => <div>Contact Component</div>);

describe('Home Component', () => {
  test('renders Home component without crashing', () => {
    render(<Home />);
  });

  test('displays the correct name and titles', () => {
    render(<Home />);
    
    // Check if your name is displayed
    expect(screen.getByText('Elisaul Batista')).toBeInTheDocument();
    
    // Check if the title 'Software Engineer' is displayed
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
   
  });

  test('renders About, Projects, and Contact components', () => {
    render(<Home />);
    
    // Check if mock components are rendered
    expect(screen.getByText('About Component')).toBeInTheDocument();
    expect(screen.getByText('Projects Component')).toBeInTheDocument();
    expect(screen.getByText('Contact Component')).toBeInTheDocument();
  });

  test('renders sections with correct IDs', () => {
    render(<Home />);
    
    // Check if the IDs are present in the document
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
    expect(screen.getByTestId('projects-section')).toBeInTheDocument();
    expect(screen.getByTestId('contact-section')).toBeInTheDocument();
  });
});