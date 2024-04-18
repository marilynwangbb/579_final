import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import './Summary.css';

const Summary = () => {

    const convertStatus = (status) => {
        switch (status) {
            case "Online Application":
                return "Application";
            case "Online Assessment":
                return "OA";
            case "On-site / Final Round":
                return "Final";
            default:
                return status;
        }
    };

    const initializeData = () => {
        const savedRecords = JSON.parse(localStorage.getItem('tableRows') || '[]');
        const totalApplications = savedRecords.length;
        const counts = savedRecords.reduce((acc, row) => {
            const normalizedStatus = convertStatus(row.status);
            acc[normalizedStatus] = (acc[normalizedStatus] || 0) + 1;
            return acc;
        }, {});

        return {
            total: totalApplications,
            counts: {
                Offer: counts.Offer || 0,
                Application: counts.Application || 0,
                OA: counts.OA || 0,
                Interview: counts.Interview || 0,
                Final: counts.Final || 0,
                Rejected: counts.Rejected || 0
            }
        };
    };

    const [data, setData] = useState(initializeData());

    const refreshSummary = () => {
        setData(initializeData());
    };

    const calculatePercentage = (count) => {
        if (data.total === 0) return 0;
        return (count / data.total * 100).toFixed(1);
    };

    return (
        <div>
            <h3>Total Applications: {data.total}</h3>
            <ProgressBar className="progress-bar-overall">
                <ProgressBar striped className="progress-bar-offer" now={calculatePercentage(data.counts.Offer)} label={`${calculatePercentage(data.counts.Offer)}%`} key={1} />
                <ProgressBar striped className="progress-bar-application" now={calculatePercentage(data.counts.Application)} label={`${calculatePercentage(data.counts.Application)}%`} key={2} />
                <ProgressBar striped className="progress-bar-oa" now={calculatePercentage(data.counts.OA)} label={`${calculatePercentage(data.counts.OA)}%`} key={3} />
                <ProgressBar striped className="progress-bar-interview" now={calculatePercentage(data.counts.Interview)} label={`${calculatePercentage(data.counts.Interview)}%`} key={4} />
                <ProgressBar striped className="progress-bar-final" now={calculatePercentage(data.counts.Final)} label={`${calculatePercentage(data.counts.Final)}%`} key={5} />
                <ProgressBar striped className="progress-bar-rejected" now={calculatePercentage(data.counts.Rejected)} label={`${calculatePercentage(data.counts.Rejected)}%`} key={6} />
            </ProgressBar>

            <div className="legend">
                <div><span className="dot offer"></span> Offer</div>
                <div><span className="dot application"></span> Application</div>
                <div><span className="dot oa"></span> Online Assessment (OA)</div>
                <div><span className="dot interview"></span> Interview</div>
                <div><span className="dot final"></span> Final Round</div>
                <div><span className="dot rejected"></span> Rejected</div>
            </div>

            <Button onClick={refreshSummary}>Refresh Summary</Button>
            
        </div>
    );
};

export default Summary;
