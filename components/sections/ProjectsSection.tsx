import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Project } from "@/types/resumeType";
import { theme } from "@/styles/theme";

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: "bold",
    color: theme.colors.heading,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.sm,
    borderBottom: `${theme.borderWidth.normal}px solid ${theme.colors.accent}`,
    paddingBottom: theme.spacing.xs,
    fontFamily: theme.fonts.bold,
  },
  projectItem: {
    marginBottom: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
    borderBottomWidth: theme.borderWidth.thin,
    borderBottomColor: theme.colors.border,
  },
  projectName: {
    fontSize: theme.fontSize.md,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
    fontFamily: theme.fonts.bold,
  },
  projectRole: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.secondary,
    marginBottom: theme.spacing.xs,
    fontFamily: theme.fonts.primary,
  },
  projectDuration: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.destructive,
    marginBottom: theme.spacing.xs,
    fontFamily: theme.fonts.bold,
  },
  tasksList: {
    marginTop: theme.spacing.xs,
  },
  task: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.secondary,
    lineHeight: 1.2,
    marginBottom: theme.spacing.xs,
    paddingLeft: theme.spacing.md,
    fontFamily: theme.fonts.primary,
  },
  placeholderText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.caption,
    fontStyle: "italic",
    fontFamily: theme.fonts.primary,
  },
});

interface ProjectsSectionProps {
  projects?: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const formatDate = (dateStr: string) => {
    if (dateStr === "Present") return "Present";
    const [year, month] = dateStr.split("-");
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <View>
      <Text style={styles.sectionTitle}>PROJECTS</Text>
      {projects && projects.length > 0 ? (
        projects.map((project, index) => (
          <View key={index} style={styles.projectItem}>
            <Text style={styles.projectName}>{project.name}</Text>
            <Text style={styles.projectRole}>{project.role}</Text>
            <Text style={styles.projectDuration}>
              {formatDate(project.start)} - {formatDate(project.end)}
            </Text>

            {project.tasks && project.tasks.length > 0 && (
              <View style={styles.tasksList}>
                {project.tasks.map((task, taskIndex) => (
                  <Text key={taskIndex} style={styles.task}>
                    • {task}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))
      ) : (
        <Text style={styles.placeholderText}>
          Projects section coming soon...
        </Text>
      )}
    </View>
  );
}
