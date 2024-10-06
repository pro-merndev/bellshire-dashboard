/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './constants/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      backgroundImage: {
        'custom-radial':
          'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)',
        'custom-radial-muted':
          'linear-gradient(0deg, #212121, #212121),radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)',
        'custom-radial-light':
          'radial-gradient(117.2% 352.94% at 3.21% 1.26%, #FFFFFF 0%, #F2F2F2 100%)',
        'primary-button-light-radial':
          'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(198, 198, 198, 0.5) 0%, rgba(166, 166, 166, 0.25) 100%), linear-gradient(90deg, #949494 0%, #191919 100%)',
        'secondary-button-light-radial':
          'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(198, 198, 198, 0.5) 0%, rgba(166, 166, 166, 0.25) 100%)',
        'primary-input-light-radial':
          'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(198, 198, 198, 0.5) 0%, rgba(166, 166, 166, 0.25) 100%)'
      },
      boxShadow: {
        custom: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto)'],
        inter: ['var(--font-inter)']
      },
      colors: {
        // ====Colors dark====
        background: 'var(--background)',
        'dark-bg': '#121212',
        heading: '#D1D1D1',
        label: '#E4E4E4',
        input: '#B5B5B5',
        link: '#007AFF',
        sidebarHeading: '#747474',
        sidebarNavlinkNormal: '#8B8B8B',
        sidebarNavlinkActive: '#E6E6E6',
        muted: '#747474',
        paragraph: '#8A8A8A',
        externalLinkIconBackground: '#575757',
        externalLinkIconColor: '#000000',
        calendarScheduleText: '#B9B9B9',
        primaryButtonBackground:
          'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(94, 102, 243, 0.5) 0%, rgba(31, 77, 163, 0.25) 100%)',
        primaryButtonBorder:
          '1px solid; border-image-source: linear-gradient(104.59deg, rgba(255, 255, 255, 0.1) 0.76%, rgba(255, 255, 255, 0.0256139) 32.78%, rgba(255, 255, 255, 0.0735087) 69.11%, rgba(255, 255, 255, 0.007) 99%)',
        secondaryButtonBackground:
          'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)',
        secondaryButtonBorder:
          '1px solid; border-image-source: linear-gradient(104.59deg, rgba(255, 255, 255, 0.1) 0.76%, rgba(255, 255, 255, 0.0256139) 32.78%, rgba(255, 255, 255, 0.0735087) 69.11%, rgba(255, 255, 255, 0.007) 99%)',
        yellow: '#F9C945',
        orange: '#F9A545',
        orange15: 'rgba(249, 165, 69, 0.15)',
        green: '#1DCA93',
        cyan10: 'rgba(133, 253, 216, 0.1)',
        red10: 'rgba(255, 133, 133, 0.1)',
        // red: '#FF6E6E',
        blue: '#4563F9',
        lightBlue: '#627CFD',
        lightBlue15: 'rgba(116, 139, 255, 0.15)',
        skyBlue: '#45ABF9',
        skyBlue15: 'rgba(69, 171, 249, 0.15)',
        teal: '#43C5A2',
        teal10: 'rgba(67, 197, 162, 0.1)',
        brightRed: '#FF5F5F',
        brightRed20: 'rgba(255, 68, 68, 0.2)',
        grey20: 'rgba(149, 149, 149, 0.2)',
        grey: '#8E8E8E',
        lightYellow: '#FFE284',
        lightYellow10: 'rgba(255, 208, 133, 0.1)',
        lightCyan: '#84E0FF',
        lightCyan10: 'rgba(133, 226, 255, 0.1)',
        white10: 'rgba(255, 255, 255, 0.1)',

        // ====Colors Light====
        lightBackground: '#F2F2F2',
        lightGray: '#EDEDED',
        lightHeading: '#1B1B1B',
        lightSidebarNavlinkActive: '#E6E6E6',
        lightExternalLinkIconBackground:
          'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(198, 198, 198, 0.5) 0%, rgba(166, 166, 166, 0.25) 100%)',
        lightExternalLinkIconColor: '#ffffff',
        lightPrimaryButtonBackground:
          'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(198, 198, 198, 0.5) 0%, rgba(166, 166, 166, 0.25) 100%)',
        lightPrimaryButtonBorder:
          '1px solid; border-image-source: linear-gradient(104.59deg, rgba(255, 255, 255, 0.1) 0.76%, rgba(255, 255, 255, 0.0256139) 32.78%, rgba(255, 255, 255, 0.0735087) 69.11%, rgba(255, 255, 255, 0.007) 99%)',
        lightSecondaryButtonBackground:
          '1px solid; border-image-source: linear-gradient(104.59deg, rgba(255, 255, 255, 0.1) 0.76%, rgba(255, 255, 255, 0.0256139) 32.78%, rgba(255, 255, 255, 0.0735087) 69.11%, rgba(255, 255, 255, 0.007) 99%)',
        lightSecondaryButtonBorder:
          '1px solid; border-image-source: linear-gradient(104.59deg, rgba(255, 255, 255, 0.1) 0.76%, rgba(255, 255, 255, 0.0256139) 32.78%, rgba(255, 255, 255, 0.0735087) 69.11%, rgba(255, 255, 255, 0.007) 99%)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
