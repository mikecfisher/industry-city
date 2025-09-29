export function Footer() {
  return (
    <footer className="py-12 bg-card/20 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-lg font-space-grotesk font-medium text-foreground mb-2">Industry City</h3>
            <p className="text-sm font-inter text-muted-foreground">Modular Urban Festival Grounds</p>
          </div>

          <div className="text-xs font-inter text-muted-foreground/80 leading-relaxed">
            <p className="mb-4">
              Capacity illustrations are area-based estimates (7–10 sq ft/person) and not permit limits. Final
              occupancies follow stamped egress calculations and approvals by DOB/FDNY.
            </p>
            <p>
              Outdoor Courtyards: seasonal availability (May → early November, proposed). Box Factory: year-round
              interior event space.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border/10">
            <p className="text-xs font-inter text-muted-foreground">
              © 2025 Industry City. All rights reserved. • Privacy Policy • No indexing by search engines.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
