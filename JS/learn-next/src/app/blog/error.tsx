'use client'


export default function ErrorBoundary({error}: {error: Error}) {
    return <div>
        Server die me no r {error.message}
    </div>
}