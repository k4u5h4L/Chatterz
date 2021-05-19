export const checkOtherPerson = (session, contact): boolean => {
    contact.members.forEach((member) => {
        if (member.email == session.user.email) {
            return true;
        }
    });

    return false;
};
