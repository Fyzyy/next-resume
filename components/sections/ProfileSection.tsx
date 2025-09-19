import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { Profile } from "@/types/resumeType";
import { theme } from "@/styles/theme";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: theme.spacing.xxl,
    paddingBottom: theme.spacing.lg,
    borderBottom: `${theme.borderWidth.thick}px solid ${theme.colors.heading}`,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
    width: "100%",
    justifyContent: "center",
  },
  photoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    border: `${theme.borderWidth.thick}px solid ${theme.colors.accent}`,
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  textContainer: {
    alignItems: "flex-start",
    marginLeft: theme.spacing.xl,
  },
  name: {
    fontSize: theme.fontSize.name,
    fontWeight: "bold",
    color: theme.colors.heading,
    marginBottom: theme.spacing.sm,
    fontFamily: theme.fonts.bold,
  },
  title: {
    fontSize: theme.fontSize.title,
    color: theme.colors.accent,
    fontWeight: "medium",
    fontFamily: theme.fonts.primary,
  },
  summary: {
    fontSize: theme.fontSize.base,
    color: theme.colors.secondary,
    lineHeight: 1.3,
    textAlign: "left",
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.md,
    borderTop: `${theme.borderWidth.normal}px solid ${theme.colors.border}`,
    maxWidth: "85%",
    fontFamily: theme.fonts.primary,
  },
});

interface ProfileSectionProps {
  profile: Profile;
}

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <View style={styles.header}>
      <View style={styles.profileContainer}>
        {profile.photo && (
          <View style={styles.photoContainer}>
            <Image style={styles.photo} src={profile.photo} />
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
        </View>
      </View>

      {profile.summary && <Text style={styles.summary}>{profile.summary}</Text>}
    </View>
  );
}
