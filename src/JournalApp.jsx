import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const JournalApp = () => {

    console.log('JournalAPp');

    return (
        <AppTheme>
            <AppRouter/>
        </AppTheme>
    )
}