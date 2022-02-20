import { Button, Divider } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { GITHUB_REPO_URL } from '~/constants/links';

export default function MenuFooter() {
  return (
    <div>
      <Divider sx={{ marginBottom: 10 }} />
      <Button
        component="a"
        href={GITHUB_REPO_URL}
        target="_blank"
        variant="light"
        leftIcon={<FontAwesomeIcon icon={faGithub} color="black" />}
      >
        {GITHUB_REPO_URL}
      </Button>
    </div>
  );
}
