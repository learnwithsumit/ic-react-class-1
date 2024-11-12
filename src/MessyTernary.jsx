export default function MessyTernary({ user, isAdmin, isGuest }) {
    let content;

    if (!user) content = "Guest";
    if (user && isAdmin) content = "Admin";

    return (
        <div>
            <h1>{content}</h1>
        </div>
    );
}
