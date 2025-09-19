import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { theme } from "@/styles/theme";

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: "bold",
    color: theme.colors.heading,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.lg,
    borderBottom: `${theme.borderWidth.normal}px solid ${theme.colors.accent}`,
    paddingBottom: theme.spacing.xs,
    fontFamily: theme.fonts.bold,
  },
  interestsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
  },
  interest: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.primary,
    backgroundColor: theme.colors.muted_background,
    padding: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    border: `${theme.borderWidth.thin}px solid ${theme.colors.border}`,
    marginRight: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
    fontFamily: theme.fonts.primary,
  },
});

interface InterestsSectionProps {
  interests: string[];
}

export function InterestsSection({ interests }: InterestsSectionProps) {
  return (
    <View>
      <Text style={styles.sectionTitle}>INTERESTS</Text>

      <View style={styles.interestsList}>
        {interests.map((interest, index) => (
          <Text key={index} style={styles.interest}>
            {interest}
          </Text>
        ))}
      </View>
    </View>
  );
}
