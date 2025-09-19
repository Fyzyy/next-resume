import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { Experience } from "@/types/resumeType";
import { theme } from "@/styles/theme";

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: "bold",
    color: theme.colors.heading,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md, // Réduit de lg à md
    borderBottom: `${theme.borderWidth.normal}px solid ${theme.colors.accent}`,
    paddingBottom: theme.spacing.xs,
    fontFamily: theme.fonts.bold,
  },
  experienceItem: {
    marginBottom: theme.spacing.lg, // Réduit de xl à lg
    paddingBottom: theme.spacing.md, // Réduit de lg à md
    borderBottomWidth: theme.borderWidth.thin,
    borderBottomColor: theme.colors.border,
  },
  role: {
    fontSize: theme.fontSize.lg,
    fontWeight: "bold",
    color: theme.colors.primary, // Noir profond pour le rôle
    marginBottom: theme.spacing.xs,
    fontFamily: theme.fonts.bold,
  },
  companyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing.xs,
  },
  company: {
    fontSize: theme.fontSize.md,
    color: theme.colors.secondary, // Gris moyen pour l'entreprise
    fontWeight: "bold",
    flex: 1,
    fontFamily: theme.fonts.bold,
  },
  logoContainer: {
    width: 24,
    height: 24,
    borderRadius: theme.borderRadius.sm,
    overflow: "hidden",
    border: `${theme.borderWidth.thin}px solid ${theme.colors.border}`,
    backgroundColor: theme.colors.card,
    marginLeft: theme.spacing.md,
  },
  logo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing.sm,
  },
  location: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted,
    fontStyle: "italic",
    fontFamily: theme.fonts.primary,
  },
  duration: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.destructive,
    fontWeight: "bold",
    fontFamily: theme.fonts.bold,
  },
  tasksList: {
    marginTop: theme.spacing.xs, // Réduit de sm à xs
  },
  task: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.secondary,
    lineHeight: 1.2, // Réduit de 1.3 à 1.2
    marginBottom: theme.spacing.xs,
    paddingLeft: theme.spacing.md,
    fontFamily: theme.fonts.primary,
  },
});

interface ExperienceSectionProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const formatDate = (dateStr: string) => {
    if (dateStr === "Present") return "Present";
    const [year, month] = dateStr.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <View>
      <Text style={styles.sectionTitle}>EXPERIENCE</Text>
      {experience.map((exp, index) => (
        <View key={index} style={styles.experienceItem}>
          <Text style={styles.role}>{exp.role}</Text>

          <View style={styles.companyContainer}>
            <Text style={styles.company}>{exp.company}</Text>
            {exp.logo && (
              <View style={styles.logoContainer}>
                <Image style={styles.logo} src={exp.logo} />
              </View>
            )}
          </View>

          <View style={styles.details}>
            {exp.location && (
              <Text style={styles.location}>{exp.location}</Text>
            )}
            <Text style={styles.duration}>
              {formatDate(exp.start)} - {formatDate(exp.end)}
            </Text>
          </View>

          {exp.tasks && exp.tasks.length > 0 && (
            <View style={styles.tasksList}>
              {exp.tasks.map((task, taskIndex) => (
                <Text key={taskIndex} style={styles.task}>
                  • {task}
                </Text>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
}
