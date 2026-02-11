export function GradientBackground() {
  return (
    <div
      className="animate-gradient absolute inset-0 opacity-100"
      style={{
        background:
          'linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #0F172A 60%, #1a2744 80%, #0F172A 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, #3B82F6 0%, transparent 60%)',
        }}
      />
    </div>
  )
}
