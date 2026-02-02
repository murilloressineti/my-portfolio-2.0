import Text from "./components/text";

export default function App() {
  return(
    <div className="flex flex-col gap-2">
      <Text variant="hero-desktop" className="text-feedback-error">Olá, mundo!</Text>
      <Text variant="hero-mobile" className="text-feedback-error">Olá, mundo!</Text>
      <Text variant="body-extra-large" className="text-feedback-success">Olá, mundo!</Text>
      <Text variant="body-large" className="text-feedback-success">Olá, mundo!</Text>
      <Text variant="body-base" className="text-feedback-success">Olá, mundo!</Text>
      <Text variant="body-small" className="text-feedback-success">Olá, mundo!</Text>

      <Text variant="h1" className="text-brand-primary">Olá, mundo!</Text>
      <Text variant="h2" className="text-brand-primary">Olá, mundo!</Text>
      <Text variant="h3" className="text-brand-primary">Olá, mundo!</Text>
      <Text variant="h4" className="text-brand-primary">Olá, mundo!</Text>
      <Text variant="h5" className="text-brand-primary">Olá, mundo!</Text>

      <Text variant="action-link" className="text-text-link">Link</Text>
      <Text variant="action-button" className="text-text-link">Link</Text>
      <Text variant="headline-medium" className="text-text-link">Link</Text>
      <Text variant="headline-small" className="text-text-link">Link</Text>
    </div>
  )
}