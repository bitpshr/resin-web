export interface FeatureCardProps {
  description: string;
  icon: React.ReactNode;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="p-6 rounded-lg border border bg-surface dark:bg-primary">
      <div className="rounded-lg p-2 dark:bg-surface bg-primary/40 inline-block text-copy mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 font-serif text-copy-on-primary">
        {title}
      </h3>
      <p className="leading-relaxed text-gray-500 font-sans text-lg">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
