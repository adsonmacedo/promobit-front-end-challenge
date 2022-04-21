type Props = {
  color: string
  size?: number | string
}

export function AvatarMan({ color, size = 100 }: Props) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      xmlSpace="preserve"
      viewBox="0 0 100 100"
      fill={color}
    >
      <path d="m83.496 78.555-16.985-3.776c-1.738-.384-3.314-1.451-4.486-2.857-3.604 3.057-7.705 4.746-12.125 4.746-4.327 0-8.382-1.67-11.97-4.697-1.166 1.38-2.721 2.428-4.434 2.809L16.51 78.555c-3.58.794-6.51 4.446-6.51 8.112V90h80v-3.333c0-3.666-2.93-7.318-6.504-8.112zM56.667 16.667h-10c-6.032 0-12.067-2.22-16.668-6.667-8.887 9.206-8.887 24.134.001 33.333l1.424 1.422C34.364 59.538 41.566 70 50 70c11.048 0 20-17.91 20-40 0-7.363-5.974-13.333-13.333-13.333zM50 63.333c-4.528 0-10.746-9.026-12.704-23.795C41.49 40.57 45.742 41.137 50 41.137s8.509-.566 12.705-1.599C60.745 54.307 54.528 63.333 50 63.333z" />
    </svg>
  )
}

export function AvatarWoman({ color, size = 100 }: Props) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      fill={color}
    >
      <path d="m83.496 78.555-16.985-3.776c-1.738-.384-3.314-1.451-4.486-2.857-3.604 3.057-7.705 4.746-12.125 4.746-4.327 0-8.382-1.67-11.97-4.697-1.166 1.38-2.721 2.428-4.434 2.809L16.51 78.555c-3.58.794-6.51 4.446-6.51 8.112V90h80v-3.333c0-3.666-2.93-7.318-6.504-8.112zM80 51.484C80 28.571 66.572 10 50 10c-16.567 0-30 18.571-30 41.484v11.849h18.989C42.147 67.526 45.924 70 50 70c4.075 0 7.854-2.474 11.013-6.667H80V51.484zM50 63.333c-5.059 0-12.243-11.256-13.214-29.218h-.002a79.036 79.036 0 0 0 6.55-2.002 79.078 79.078 0 0 0 19.752 4.245c-.01 0-.022.01-.036.01-1.422 16.64-8.206 26.965-13.05 26.965z" />
    </svg>
  )
}

export function AvatarUnknown({ color, size = 100 }: Props) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      fill={color}
    >
      <path d="M89.026 81.962 70.152 63.076c4.079-5.531 6.514-12.345 6.514-19.744C76.666 24.925 61.748 10 43.333 10 24.925 10 10 24.925 10 43.333c0 18.412 14.925 33.333 33.333 33.333 7.405 0 14.216-2.438 19.747-6.52l18.883 18.88a3.338 3.338 0 0 0 4.714 0l2.351-2.354a3.335 3.335 0 0 0-.002-4.71zM43.333 23.333a8.334 8.334 0 0 1 8.333 8.336 8.329 8.329 0 0 1-8.333 8.33A8.329 8.329 0 0 1 35 31.669a8.335 8.335 0 0 1 8.333-8.336zm20 37.601c-4.883 5.551-12.023 9.069-20 9.069-7.974 0-15.114-3.519-19.998-9.072v-4.265c0-5.501 4.499-9.997 9.998-9.997h20c5.505 0 10 4.496 10 9.997v4.268z" />
    </svg>
  )
}